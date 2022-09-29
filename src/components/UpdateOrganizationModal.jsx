import React from "react";

const UpdateOrganizationModal = ({ setIsOrgModalUpdate }) => {
    return (
        <div className="openOrgModal_container">
            <div className="openOrgModal_wrapper">
                <div className="openOrgModal_top">
                    <span className='orgName'>Tashkilotni o'zgartirish</span>
                    <i className="material-icons closeIcon" onClick={() => setIsOrgModalUpdate({ open: false, obj: {} })}>&#xe5cd;</i>
                </div>
                <div className="openOrgModal_bottom">
                    <form className="formUpdateData">
                        <div className='formUpdateDataPosition'>
                            <input
                                type="text"
                                placeholder='OrgName'
                                className='ibput_data_update'
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className='ibput_data_update'
                            />
                        </div>
                        <div className='formUpdateDataPosition formUpdateDataPositionB'>
                            <input
                                type="text"
                                placeholder='Exat'
                                className='ibput_data_update'
                            />
                            <input
                                type="text"
                                placeholder='Exat'
                                className='ibput_data_update'
                            />
                        </div>
                    </form>
                    <button type='button' className='btn_save'><i className='fas-fa save'></i> Saqlash</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UpdateOrganizationModal);