// Presentation component
import TextInput from "../TextInput/textInput"; 
import Button from "../Button/Button" ;

function TextInputForm({ handleFormSubmit, handleTextInputChange, value, inputType, setInputType }) {
    return (
        <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
            <div className="mb-2 w-full">
                 <TextInput 
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>

            <div className="mb-2 w-full flex justify-center">
                <Button
                    styleType="warning"
                    text={inputType === 'password' ? 'Show' : 'Hide'}
                    onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>

            <div className="w-full flex justify-center">
                <Button 
                    text="OK"
                    buttonType="submit"
                />
            </div>
        </form>
    );

}

export default TextInputForm;