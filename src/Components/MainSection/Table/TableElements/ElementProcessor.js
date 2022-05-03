export function StatusPill({ value }) {
    const status = value ? value : "unknown";

    return (
        <span className={"flex items-center justify-start"}>
            <p className="hidden md:inline lg:inline">{status}</p>
            {status === "Alright" && (
                <div className="m-2 h-2 w-2 rounded-full bg-skin-success"></div>
            )}
            {status === "In Progress" && (
                <div className="m-2 h-2 w-2 rounded-full bg-skin-warning"></div>
            )}
            {status === "Out Of Stock" && (
                <div className="m-2 h-2 w-2 rounded-full bg-skin-error"></div>
            )}
        </span>
    );
}

export function QuantityPill({ value }) {
    const stockQuantity = value ? value : "unknown";
    const stock = stockQuantity.split('/')[0]
    const quantity = stockQuantity.split('/')[1]

    return (
        <>
            < div style={{ textAlign: "right" }}><span className="font-bold">{quantity}</span>/{stock}</div>
        </>
    );
}


export function Select({ value }) {
    return (
        <td>
            <input
                class="form-check-input focus:outline-none float-left mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-neutral-3 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-primary-2 checked:bg-primary-2 checked:bg-checked-box"
                type="checkbox"
                value=""
                id="checkChecked"
                aria-label="selection button"
            />
        </td>
    );
}