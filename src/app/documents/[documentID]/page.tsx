import { Editor } from "./editor";

interface DocumentIdPageProps {
    params : Promise<{documentID: string}>;
}

const documentIdPage = async ({params} : DocumentIdPageProps) => {

    const {documentID} = await params;

    return (
        <div className="min-h-screen bg-[#F9FBFD]">
        <Editor />
        </div>
    );
}

export default documentIdPage