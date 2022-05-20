import { NavigateFunction, useNavigate } from "react-router-dom";
import "./preview.css";

import Cali from "../cities/cali";
import Bogota from "../cities/bogota";
import Medellin from "../cities/medellin";
import Cartagena from "../cities/cartagena";
import Bucaramanga from "../cities/bucaramanga";

interface Props {
    status: string;
}

export function Space() {
    return <div style={{ width: 20 }} />
}

export default function Preview(props: Props) {
    const { status } = props;

    return (
        <div className="ContainerPreview">
            {status === 'Cali' && <Cali />}
            {status === 'Bogota' && <Bogota />}
            {status === 'Medellin' && <Medellin />}
            {status === 'Cartagena' && <Cartagena />}
            {status === 'Bucaramanga' && <Bucaramanga />}
        </div>
    );
}