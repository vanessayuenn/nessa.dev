export default function Footer () {
  return (
    <footer className='mt-24 py-12 md:py-24 text-center bg-red bg-opacity-25 text-sm font-body text-dark'>
      <p>I can be found in other corners of the Internet:</p>
      <p className='my-2'>
        <a className='text-red hover:underline' href='https://twitter.com/vanessayuenn'>Twitter</a>,&nbsp;
        <a className='text-red hover:underline' href='https://github.com/vanessayuenn'>GitHub</a>,&nbsp;
        <a className='text-red hover:underline' href='https://linkedin.com/in/vanessayuenn/'>LinkedIn</a>.
      </p>
      <p className='my-2'>Or email me at <span className='font-display text-xs text-red'>v@nessa [dot] dev</span>.</p>
    </footer>
  )
}
