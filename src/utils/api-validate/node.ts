type Fulfiled = {
    status: '1' | '2' | '3'
}

type Rejectd = {
    status: '4' | '5'
}

type Metadata = Fulfiled | Rejectd

class Node<Data> {
    constructor(
        public readonly data: Data,
        public readonly metadata: Metadata
    ) { }
}

export default Node
