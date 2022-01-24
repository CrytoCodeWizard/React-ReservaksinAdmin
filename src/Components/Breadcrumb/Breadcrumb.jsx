import React from "react";
import {Breadcrumb, } from "react-bootstrap";

function BreadcrumbComp(props) {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Session</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Session Detail
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbComp;
