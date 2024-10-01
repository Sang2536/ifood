import { FormInput } from '../components/pages/form';

function SearchProduct() {
    return (
        <form action='/product-search' role="form" method="post">
            <FormInput
                className={{
                    div: 'form-floating my-4',
                    input: 'form-control',
                }}
                typeInput="text"
                nameInput="search"
                idInput="search"
                patternInput="[0-9a-zA-Z]"
                valueInput=""
                placeholderInput="Search Product"
                textLabel="Search Product"
            />

            <button type="submit" className="btn custom-btn form-control w-50 m-auto mt-4 mb-3">
                Search
            </button>
        </form>
    );
}

export default SearchProduct;
