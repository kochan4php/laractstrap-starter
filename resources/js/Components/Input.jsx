const Input = ({ className, ...properties }) => (
    <input className={className ? className : "form-control"} {...properties} />
);

export default Input;
