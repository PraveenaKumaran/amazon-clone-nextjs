import {createUrl, setJwtKey, isStoredJwt, post, get} from "./api-client";

export const me = async () => {
    try{
        return isStoredJwt()?(await get(createUrl("/api/me")))?.data:null;/*{
                                                                            data: {
                                                                                user: { id: 1, 
                                                                                name: "Alice", 
                                                                                email: "alice@example.com" },
                                                                                accessToken: "abc.def.ghi"
                                                                                },
                                                                            status: 200,--------------------------->| Status  | Meaning              | Description                                                 |
                                                                                                                    | ------- | -------------------- | ----------------------------------------------------------- |
                                                                                                                    | **200** | OK                   | Request succeeded and response body is returned             |
                                                                                                                    | **201** | Created              | Resource was created successfully (e.g. POST /signup)       |                                                                                                                 
                                                                                                                    | **400** | Bad Request          | The request is malformed (missing fields, invalid input)    |
                                                                                                                    | **401** | Unauthorized         | Missing or invalid authentication (like JWT token)          |
                                                                                                                    | **403** | Forbidden            | You're authenticated but not allowed to access the resource |
                                                                                                                    | **404** | Not Found            | Endpoint or resource doesn’t exist                          |
                                                                                                                    | **409** | Conflict             | Resource conflict (e.g., user already exists)               |
                                                                                                                    | **422** | Unprocessable Entity | Validation errors (common with form inputs)                 |


                                                                            statusText: "OK",
                                                                            headers: {
                                                                                "content-type": "application/json",
                                                                                "cache-control": "no-store"
                                                                            },
                                                                            config: {
                                                                                url: "/api/me",
                                                                                method: "get",
                                                                                headers: { Authorization: "Bearer abc123" },
                                                                                ...
                                                                            },
                                                                            request: XMLHttpRequest { ... }
                                                                        }*/
    }catch(error){
        return error;
    }
};

export const signup = async (username: string, password: string) => {
    try{
        const result = (
        await post(createUrl("/api/signup"), {
            username,
            password,
            firstname:"demo",
            lastname:"s",
        })
    )?.data

    if(!result){
        return alert("Could not Signup");
    }
    setJwtKey(result.accessToken);
    return me();
    }catch(error){
        alert("Signup failed");
        return error;
    }
    
}

export const login = async (username: string, password: string) => {
    try{
        const response = await post(createUrl("/api/login"), {username,password,});
        setJwtKey(response?.data?.accessToken);
        return me();
    }catch(error){
        return error;        
    }
};