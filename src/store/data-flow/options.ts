type Method = 'GET' | 'HEAD' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
type Headers = Partial<{ 
    readonly 'Content-Type': string
    readonly 'Accept': string
    'authorization': string 
}>

class Options {
    public readonly method
    public readonly body
    public readonly headers

    constructor(method: Method, headers: Headers, body?: string) {
        this.method = method
        this.body = body
        this.headers = headers
    }

    public static GET(headers: Headers, ) {
        return new this('GET', headers)
    }

    public static PUT(headers: Headers, body: any) {
        return new this('PUT', headers, JSON.stringify(body))
    }

    public static PATCH(headers: Headers, body: any) {
        return new this('PATCH', headers, JSON.stringify(body))
    }

    public static POST(headers: Headers, body: any) {
        return new this('POST', headers, JSON.stringify(body))
    }

    public static DELETE(headers: Headers, body: any) {
        return new this('DELETE', headers, JSON.stringify(body))
    }
}

export default Options
