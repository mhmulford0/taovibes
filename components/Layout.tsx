interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div style={{ display: 'flex', height: '100vh' }}>{children}</div>
}

export default Layout
