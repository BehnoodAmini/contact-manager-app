import { useContext } from "react";
import { Link } from "react-router-dom";

import { ContactContext } from "../../context/contactContext";
import Spinner from "../Spinner";
import { GREEN, PURPLE, COMMENT } from "../../helpers/colors";

const AddContact = () => {
    const { loading, contact, onContactChange, groups, createContact } = useContext(ContactContext);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            alt=""
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "50%",
                            }}
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 fw-bold text-center" style={{ color: GREEN }}>
                                        ساخت مخاطب جدید
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: GREEN }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <form onSubmit={createContact}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                value={contact.fullname}
                                                onChange={onContactChange}
                                                type="text"
                                                className="form-control"
                                                required={true}
                                                placeholder="نام و نام خانوادگی"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                value={contact.photo}
                                                onChange={onContactChange}
                                                type="text"
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                value={contact.mobile}
                                                onChange={onContactChange}
                                                type="number"
                                                className="form-control"
                                                required={true}
                                                placeholder="شماره موبایل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="email"
                                                value={contact.email}
                                                onChange={onContactChange}
                                                type="email"
                                                className="form-control"
                                                required={true}
                                                placeholder="ایمیل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="job"
                                                value={contact.job}
                                                onChange={onContactChange}
                                                type="text"
                                                className="form-control"
                                                required={true}
                                                placeholder="شغل"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={onContactChange}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">انتخاب گروه</option>
                                                {groups.length > 0 && groups.map((group) => (
                                                    <option key={group.id} value={group.id}>
                                                        {group.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                className="btn"
                                                type="submit"
                                                style={{ backgroundColor: PURPLE }}
                                                value="ساخت مخاطب"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: COMMENT }}
                                            >
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
            }
        </>
    );
};

export default AddContact;