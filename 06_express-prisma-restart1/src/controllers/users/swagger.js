export const getUserSwagger = {
    "/detail/:id": {
        get: {
            tags: ["Users"],
            summary: "유저를 상세 조회합니다.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "number",
                    },
                },
            ],

            responses : {
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
    "/users": {
        post: {
            tags: ["Users"],
            summary: "유저 상세 조회입니다.",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "number",
                    },
                },
            ],
            responses : {
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