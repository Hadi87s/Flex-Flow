import React from 'react'

interface IError {
    error: boolean
    message: string
}

const ErrorMessage = ({error, message}: IError) => {
  return (
    <span className={`${error? "block": "hidden"} text-red-500 text-sm mt-1 ml-1`}>{message}</span>
  )
}

export default ErrorMessage
