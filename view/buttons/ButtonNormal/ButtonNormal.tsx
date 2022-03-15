interface ButtonNormalProps {
  text: string
  classes?: string
}
export const ButtonNormal = ({ text, classes = '' }: ButtonNormalProps) =>
  <button className={`py-2 px-3 rounded-md px-7 text-xl bg-main text-secondT ${classes}`}>
    {text}
  </button>