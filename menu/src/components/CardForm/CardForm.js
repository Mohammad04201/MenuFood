// import { Card, Button } from "react-bootstrap";
// import PropTypes from "prop-types";
// import "./card.css";

// export default function CardForm({ item, onImageError }) {
//   return (
//     <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
//       <Card.Img
//         src={item.imgUrl}
//         alt={item.title}
//         onError={onImageError}
//         style={{
//           height: "200px",
//           objectFit: "cover",
//           width: "100%",
//         }}
//       />

//       <Card.Body className="text-center d-flex flex-column justify-content-between">
//         <div>
//           <h5 className="fw-bold">{item.title}</h5>
//           <p className="text-muted small mb-2">{item.description}</p>
//         </div>

//         <div className="mb-2">
//           <span className="text-danger fw-bold fs-5">{item.newPrice} د.أ</span>{" "}
//           <span className="text-muted text-decoration-line-through">{item.oldPrice} د.أ</span>
//         </div>

//         <Button variant="danger" className="w-100 rounded-3">
//           اطلب الآن
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// CardForm.propTypes = {
//   item: PropTypes.object.isRequired,
//   onImageError: PropTypes.func,
// };
