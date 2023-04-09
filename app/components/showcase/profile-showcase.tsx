import { Col, Row, Tooltip } from "antd";

export default function ProfileShowCase() {
    return (
        <Row gutter={[16, 16]}>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <Tooltip title="Curious? Click to show more!">
                    <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
                </Tooltip>
            </Col>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
            </Col>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
            </Col>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
            </Col>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
            </Col>
            <Col
                span={24}
                md={8}
                className="p-2.5 border bg-white box-shadow-lift cursor-pointer"
            >
                <img className="border" src={"https://i.imgur.com/l8DpBR0.jpeg"} />
            </Col>
        </Row>
    );
}