interface CommonContainerProps {
  children: any
  classes?: string
}

export const CommonContainer = ({ children, classes = '' }: CommonContainerProps) =>
  <div className={`container flex justify-center py-12 ${classes}`}>
    {children}
  </div>