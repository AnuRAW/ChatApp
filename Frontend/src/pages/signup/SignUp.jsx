import GenderCheckbox from './GenderCheckbox.jsx'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-semibold text-center text-gray-300'>
      SignUP
      <span className='text-blue-500'>ChatAPP</span>
      </h1>    
   <form>
   <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>FullName</span>
    </label>
    <input type="text" placeholder='Enter Your FullName' className='w-full  input input-bordered h-10 border-cyan-700' />
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>UserName</span>
    </label>
    <input type="text" placeholder='Enter UserName' className='w-full  input input-bordered h-10 border-cyan-700' />
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>Password</span>
    </label>
    <input type="password" placeholder='Enter Password' className='w-full  input input-bordered h-10 border-cyan-700' />
    </div>
    <div>
    <label className='label p-2'>
      <span className='text-base label-text text-gray-700 font-semibold'>Confirm Password</span>
    </label>
    <input type="password" placeholder='Confirm Password' className='w-full  input input-bordered h-10 border-cyan-700' />
    </div>
    
    <GenderCheckbox/>

    <a className='text-sm mt-2 text-violet-500 hover:underline  hover:text-blue-900 inline-block'>Already Have an Account?</a>
    <div>
   <button className="btn btn-block btn-sm mt-2">SignUP</button>
   </div>
    </form>
    </div>
    </div>
  )
}

export default SignUp



// STATER CODE FOR SIGNUP
// import GenderCheckbox from './GenderCheckbox.jsx'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <h1 className='text-3xl font-semibold text-center text-gray-300'>
//       SignUP
//       <span className='text-blue-500'>ChatAPP</span>
//       </h1>    
//    <form>
//    <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>FullName</span>
//     </label>
//     <input type="text" placeholder='Enter Your FullName' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>UserName</span>
//     </label>
//     <input type="text" placeholder='Enter UserName' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>Password</span>
//     </label>
//     <input type="password" placeholder='Enter Password' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
//     <div>
//     <label className='label p-2'>
//       <span className='text-base label-text text-gray-700 font-semibold'>Confirm Password</span>
//     </label>
//     <input type="password" placeholder='Confirm Password' className='w-full  input input-bordered h-10 border-cyan-700' />
//     </div>
    
//     <GenderCheckbox/>

//     <a className='text-sm mt-2 text-violet-500 hover:underline  hover:text-blue-900 inline-block'>Already Have an Account?</a>
//     <div>
//    <button className="btn btn-block btn-sm mt-2">SignUP</button>
//    </div>
//     </form>
//     </div>
//     </div>
//   )
// }

// export default SignUp
