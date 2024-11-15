import React from 'react';
import { Button, Badge, Row, Col } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    // Function to get the background color based on task status
    const getBackgroundColor = (status) => {
        switch (status) {
            case 'Done':
                return '#e9f7ef';
            case 'In Progress':
                return '#e3f2fd';
            default:
                return '#f8f9fa';
        }
    };

    // Function to render the priority badge
    const renderPriorityBadge = (priority) => {
        switch (priority) {
            case 'High':
                return <Badge bg="danger">High</Badge>;
            case 'Medium':
                return <Badge bg="warning">Medium</Badge>;
            case 'Low':
                return <Badge bg="success">Low</Badge>;
            default:
                return <Badge bg="secondary">None</Badge>;
        }
    };

    // Function to render the status badge
    const renderStatusBadge = (status) => {
        switch (status) {
            case 'To Do':
                return <Badge bg="secondary">To Do</Badge>;
            case 'In Progress':
                return <Badge bg="info">In Progress</Badge>;
            case 'Done':
                return <Badge bg="success">Done</Badge>;
            default:
                return <Badge bg="secondary">Unknown</Badge>;
        }
    };

    return (
        <div className="task-list mt-4">
            {tasks.length === 0 && <p className="text-muted">No tasks available. Add some tasks to get started!</p>}
            {tasks.map((task, index) => (
                <div
                    className="task-card mb-3 p-3"
                    key={task.id}
                    style={{ backgroundColor: getBackgroundColor(task.status), borderRadius: '10px' }}
                >
                    <Row className="align-items-center">
                        {/* Task Name */}
                        <Col xs={6} md={4}>
                            <p className="task-name mb-1"><strong>{index + 1}. {task.name}</strong></p>
                        </Col>

                        {/* Priority Badge */}
                        <Col xs={3} md={2}>
                            <p className="mb-1"><strong>Priority:</strong> {renderPriorityBadge(task.priority)}</p>
                        </Col>

                        {/* Status Badge */}
                        <Col xs={3} md={2}>
                            <p className="mb-1"><strong>Status:</strong> {renderStatusBadge(task.status)}</p>
                        </Col>

                        {/* Action Buttons */}
                        <Col xs={12} md={4} className="d-flex justify-content-end">
                            <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => showEditForm(task)}
                                className="me-2"
                            >
                                ✏
                            </Button>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => deleteTask(task.id)}
                            >
                                🗑
                            </Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
