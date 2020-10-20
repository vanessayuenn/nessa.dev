import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer () {
  return (
    <footer className='mt-24 py-12 text-center border-t-2 border-red text-sm font-body'>
      <p>I can be found in other corners of the Internet:</p>
      <p className='my-2'>
        <a className='text-red hover:underline' href="https://twitter.com/vanessayuenn">Twitter</a>,&nbsp;
        <a className='text-red hover:underline' href="https://github.com/vanessayuenn">GitHub</a>,&nbsp;
        <a className='text-red hover:underline' href="https://linkedin.com/in/vanessayuenn/">LinkedIn</a>.
      </p>
      <p className='my-2'>Or email me at <span className='font-display text-xs text-red'>v@nessa [dot] dev</span>.</p>
    </footer>
  )
}
