

export default function Container({ children, className="", useTab=false }) {
  return (
    <div tabIndex={useTab === true ? "0" : "-1"} className={"custom-container " + className}>{children}</div>
  )
}

