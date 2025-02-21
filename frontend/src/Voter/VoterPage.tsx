import { useState } from "react";
import "./Voter.css";
import "./voterpage.css";

const VoterPage = () => {
    const [expandedNGO, setExpandedNGO] = useState<number | null>(null);
    const [selectedTask, setSelectedTask] = useState<any | null>(null);
    const [activeTab, setActiveTab] = useState<string>("description");
    const [zoomedImage, setZoomedImage] = useState<string | null>(null); // State for zoomed image
    const image1 = "data:image/jpeg;base64,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";
    const ngos = [
        {
            id: 1,
            name: "NGO 1",
            description: "Helping underprivileged children with education ",
            tasks: [
                { title: "Build a school", description: "Help build a school for children in need.", images: [image1, image1,] },
                { title: "Provide books", description: "Donate books to children who lack resources.", images: ["/images/books.jpg"] },
                { title: "Fund scholarships", description: "Support scholarships for bright students.", images: ["/images/scholarship.jpg"] }
            ],
        },
        {
            id: 2,
            name: "NGO 2",
            description: "Environmental protection and sustainability",
            tasks: [
                { title: "Plant trees", description: "Join us in planting 10,000 trees.", images: ["/images/trees.jpg"] },
                { title: "Reduce plastic waste", description: "Help reduce single-use plastics.", images: ["/images/plastic.jpg"] },
                { title: "Clean rivers", description: "Volunteer for river clean-up programs.", images: ["/images/river.jpg"] }
            ],
        },
        {
            id: 3,
            name: "NGO 3",
            description: "Animal welfare and rescue",
            tasks: [
                { title: "Rescue stray dogs", description: "Save and provide care for stray dogs.", images: ["/images/dogs.jpg"] },
                { title: "Provide shelter", description: "Build and manage animal shelters.", images: ["/images/shelter.jpg"] },
                { title: "Adopt-out program", description: "Encourage pet adoption and responsible care.", images: ["/images/adopt.jpg"] }
            ],
        },
    ];

    const toggleExpand = (id: number) => {
        setExpandedNGO(expandedNGO === id ? null : id);
    };

    return (
        <div className="voter">
            <div className="ngo-container">
                {ngos.map((ngo) => (
                    <div key={ngo.id} className="ngo-card">
                        <div className="ngo-header" onClick={() => toggleExpand(ngo.id)}>
                            <div className="ngo-info">
                                <div className="ngo-image"></div>
                                <div>
                                    <h3>{ngo.name}</h3>
                                    <p>{ngo.description}</p>
                                </div>
                            </div>
                            <div className="dropdown-icon">{expandedNGO === ngo.id ? "▲" : "▼"}</div>
                        </div>
                        {expandedNGO === ngo.id && (
                            <div className="tasks-container">
                                {ngo.tasks.map((task, index) => (
                                    <div key={index} className="task">
                                        <span>{task.title}</span>
                                        <button className="vote-btn" onClick={() => setSelectedTask(task)}>
                                            Vote
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Popup When a Task is Selected */}
            {selectedTask && (
                <div className="voter-popup-overlay">
                    <div className="voter-popup-content">
                        <span className="close-icon" onClick={() => setSelectedTask(null)}>
                            &times;
                        </span>

                        <div className="popup-tabs">
                            <button
                                id="buttonshead"
                                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                id="buttonshead"
                                className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
                                onClick={() => setActiveTab('images')}
                            >
                                Images
                            </button>
                        </div>

                        <div className="popup-tab-content">
                            {activeTab === 'description' ? (
                                <div className="popup-description-container">
                                    <h2>{selectedTask.title}</h2>
                                    <p className="popup-description">{selectedTask.description}</p>
                                </div>
                            ) : (
                                <div className="popup-images-container">
                                    <div className="image-grid">
                                        {selectedTask.images.map((img: string, index: number) => (
                                            <img key={index} src={img} alt="Project" className="popup-image" onClick={() => setZoomedImage(img)} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Approved & Not Approved Buttons */}
                        <div className="popup-actions">
                            <button className="approved-btn">Approved</button>
                            <button className="not-approved-btn">Not Approved</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Zoomed Image Popup */}
            {zoomedImage && (
                <div className="zoomed-popup-overlay" onClick={() => setZoomedImage(null)}>
                    <div className="zoomed-popup-content">
                        <img src={zoomedImage} alt="Zoomed In" className="zoomed-image" />
                        <span className="close-zoomed-popup">&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoterPage;