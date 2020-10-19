import classnames from 'classnames'

export default function Logo({ size }) {
  return (
    <div className={classnames('logo', {'logo-sm': size === 'sm'})} >
      <span>Nessa<br />.Dev</span>
    </div>
  )
}
