export const getUserSwagger = {
    "/detail/:id": {
        get: {
            tages: ["Users"],
            summary: "유저 상세 조회입니다.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        types: "number",
                    },
                },
            ],
            reponses : {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties : {
                                    user: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type : "number",
                                            },
                                            name: {
                                                type: "string",
                                            },
                                            age: {
                                                type: "number",
                                            },
                                            email: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

export const getUsersSwagger = {
    "/detail/:id": {
        post: {
            tages: ["Users"],
            summary: "유저 상세 조회입니다.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        types: "number",
                    },
                },
            ],
            reponses : {
                200: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties : {
                                    user: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type : "number",
                                            },
                                            name: {
                                                type: "string",
                                            },
                                            age: {
                                                type: "number",
                                            },
                                            email: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}