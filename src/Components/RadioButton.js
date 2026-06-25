/**
 * Radio Button Component Constructor 
 * @param { Object }  - A deconstructed Radio Button element's parameters 
 * @returns A dynamic radio button component
 */

const RadioButton = ({ label, name, value, selectedValue, onChange }) => {

    // Generate unique ID to link label and input
    const id = `${name}-${value}`;

    return ( 
        <div>
            <label htmlFor={id} className="donation-label">{label}
                <input 
                type="radio"
                id={id}
                name={name}
                value={value}
                // Controlled logic - evaluated as true/false based on state
                checked={selectedValue === value}
                onChange={onChange}
            />
            </label>
        </div>
     );
}
 
export default RadioButton;