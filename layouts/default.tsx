import { ReactNode, FC } from 'react'

type CustomProps = {
  children: ReactNode
}

const DefaultLayout: FC<CustomProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        {children}
      </div>
      <footer className="py-10">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-500">Made with love by groremus</p>
        </div>
      </footer>
    </div>
  )
}

export default DefaultLayout
