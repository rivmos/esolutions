import SignUpForm from './SignUpForm'

const SignUp = () => {
    return (
        <>
            <div className="my-4">
                {/* <h3 className="mb-1">Aritst Sign Up</h3> */}
                {/* <p>Unlock a World of Artistic Wonder!</p> */}
            </div>
            <SignUpForm disableSubmit={false} />
        </>
    )
}

export default SignUp
