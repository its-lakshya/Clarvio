import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <main className='flex justify-center items-center'>
      <SignUp />
    </main>
  )
}

export default page