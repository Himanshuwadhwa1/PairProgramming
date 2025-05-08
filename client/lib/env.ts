function assertValue<T>(value:T):T{
    if(typeof value == "undefined"){
        throw Error("missing evnvironment value");
    }
    return value;
}

export const serverURL = assertValue(process.env.NEXT_PUBLIC_SERVER_URL);