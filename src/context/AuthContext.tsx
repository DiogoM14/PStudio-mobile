import { createContext, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../service/axios";
import { useNavigation } from "@react-navigation/native";

type User = {
    _id: string
    email: string,
    firstName: string,
    lastName: string,
    avatar: string,
    userType: string
}

type SignInData = {
    email: string,
    password: string
}

type AuthContexType = {
    isAuthenticated: boolean,
    signIn: (data: SignInData) => Promise<void>
    user: any,
    signOut: any
}

export const AuthContext = createContext({} as AuthContexType)

export function AuthProvider({ children }: any) {

    const [user, setUser] = useState<User | null>(null)
    // const { navigate } = useNavigation();

    const isAuthenticated = !!user


    useEffect(() => {
        const token = AsyncStorage.getItem('@token')

        if (token) {
            api.get('/me', {
                headers: {
                    'x-access-token': token
                }
            }).then(response => {
                const { _id, email, firstName, lastName, avatar, userType } = response.data
                setUser({ _id, email, firstName, lastName, avatar, userType })
            })
        }
    }, [])

    async function signIn({ email, password }: any) {
      try {
          const response = await api.post('/auth/login', {
              email: email,
              password: password
          })
  
          await AsyncStorage.setItem('@token', response.data)
  
          api.get('/me', {
              headers: {
                  'x-access-token': response.data
              }
          }).then(response => {
              const { _id, email, firstName, lastName, avatar, userType } = response.data
              setUser({ _id, email, firstName, lastName, avatar, userType })
            //   navigate("ForgotPassword")
          })
      } catch (err) {
          console.log(err)
      }
  }

    function signOut() {
        AsyncStorage.removeItem('@token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}