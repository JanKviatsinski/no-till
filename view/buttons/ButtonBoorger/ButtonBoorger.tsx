interface ButtonBoorgerProp {
  //@ts-ignore
  onClick: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ButtonBoorger = ({ onClick }: ButtonBoorgerProp) =>
  <button onClick={(e) => onClick(e)}>
    <div className='
hover:cursor-pointer
flex
relative
before:content-""
before:bg-alternate
before:h-0.5
before:w-7
before:absolute
before:rounded-md
after:content-""
after:bg-alternate
after:h-0.5
after:w-7
after:absolute
after:bottom-0
after:left-0
after:rounded-md
h-7
w-7'
    >
      <div className='
  self-center
  absolute
  bg-alternate
  w-7
  h-0.5
  rounded-md
  '></div>
    </div>
  </button>