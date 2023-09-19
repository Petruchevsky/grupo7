import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.css";
import Image from "next/image";

const MyModal = ({ show, onHide, title, message, imageUrl }) => {
	return (
		<div>
			<Modal
				show={show}
				onHide={onHide}
            dialogClassName={styles.modal}
			>
				<Modal.Header className={styles.divTitle}>
						<Image
							src="/img/g7-red.jpeg"
							alt="logo de grupo 7"
							width={50}
							height={50}
						/>
						<h2 className={styles.title}>{title}</h2>
				</Modal.Header>

				<Modal.Body className={styles.modalBody}>
					<p className={styles.msje}>{message}</p>
					{imageUrl && (
							<Image
								src={imageUrl}
								width={150}
								height={150}
								alt="modal-illustration"
								className={styles.imgModal}
							/>
					)}
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={onHide} variant="link">
						<Image
							src="/img/btn-cruz.webp"
							alt="imagen de boton cerrar"
							width={35}
							height={35}
						/>
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default MyModal;
