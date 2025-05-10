function Button({bgColor = 'grey', onClick}) {
    return (
        <button onClick={onClick} type="button" className="rounded-full px-4 py-1" style={{backgroundColor: bgColor}}>{bgColor}</button>
    )
}

export default Button;