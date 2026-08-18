export default function Icon({ name, className }) {
    return (
        <svg aria-hidden="true" className={className}>
            <use href={`#icon-${name}`} />
        </svg>
    );
}
