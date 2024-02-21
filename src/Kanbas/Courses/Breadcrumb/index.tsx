import React from 'react';
import { courses } from "../../Database";
import { useParams } from "react-router-dom";
import { BreadcrumbItem } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2"; 
import "./index.css";

const CustomBreadcrumb = () => {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const breadcrumbComponents = pathParts.slice(4);
  const { courseId} = useParams(); 
  const course = courses.find((course) => course._id === courseId);

  const breadcrumbItems = breadcrumbComponents.map((part, index) => (
    <Breadcrumb.Item key={index} active={index === breadcrumbComponents.length - 1}>
      {index === breadcrumbComponents.length - 1 ? (
        part
      ) : (
        <Link to={`${pathParts.slice(0, index + 5).join('/')}`}>{part}</Link>
      )}
    </Breadcrumb.Item>
  ));

  return <Breadcrumb id="breadcrumb"><BreadcrumbItem ><Link to={`${pathParts.slice(0, 4).join('/')}/Home`}><HiMiniBars3/> {course?.name} SP23</Link></BreadcrumbItem>{breadcrumbItems}</Breadcrumb>;
};

export default CustomBreadcrumb;