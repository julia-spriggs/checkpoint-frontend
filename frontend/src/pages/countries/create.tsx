import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

const schema = yup.object({
    name: yup.string().required("the name of the country is required"),
    code: yup.string().required("the country code is required"),
    emoji: yup.string().required("the country emoji is required"),
    continent: yup.object({
        id: yup.number().required("the continent is required"),
    }),
});

type FormType = {
    continent: { id: number };
    name: string;
    code: string;
    emoji: string;
};

function CreateCountry() {
    const router = useRouter();
    const [createCountry] = useState();
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState<string>("");
    const {
        register,
        handleSubmit,
        reset,
        setError,

        formState: { errors, },
    } = useForm<FormType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormType) => {
        createCountry({
            variables: { info: data },
            onCompleted(data) {
                router.push(`/continents/view/${data.createCountry.continent.id}`);
            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <p>{errors?.name?.message}</p>

                <input {...register("code")} placeholder="code" />
                <p>{errors?.code?.message}</p>

                <input {...register("emoji")} placeholder="emoji" />
                <p>{errors?.emoji?.message}</p>

                <select {...register("continent.id")}>
                    <option>Choose the relevant continent</option>
                    {data.listContinents.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
}

export default CreateCountry;