const baseApiUrl = "http://localhost:5000/";

interface Link {
    customer: string
}

const ALL_API_CONST: Link = {
    customer: baseApiUrl + "api/v1/customers",
}

export default ALL_API_CONST;