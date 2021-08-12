import { func, shape } from 'prop-types';
import './styles.css';
import React, { useState } from 'react';
import $ from 'jquery';

const ClientListForm = (props) => {
    const { clientListData, lang } = props;
    const { clientList } = clientListData;
    const [clientId, setClientId] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientListConfirmBtn, setClientListConfirmBtn] = useState(true);
    var companyID = props.Id;
    var ScansName = localStorage.getItem('scansName');

    const handleChnage = (event) => {
        setClientId(event.target.value);
        setClientName(event.target.id);
        setClientListConfirmBtn(false);
        sessionStorage.setItem('companyName', event.target.id);
        sessionStorage.setItem('companyID', event.target.value);
    };

    const handleCancel = () => {
        window.location.reload();
    };

    // $(document).keyup(function (e) {
    //   if (e.keyCode == 27) {
    //     //escape ke
    //     //reload the page if you still need to
    //     window.location.reload();
    //   }
    // });

    return (
        <div>
            <div
                className="row clientlistModal-FirstRow"
                style={{ marginTop: '0px' }}>
                <div className="col pl-0">
                    <p className="clientlistModal-title">
                        {lang === 'Dutch' ? 'Kies een klant' : 'Choose a Client'}
                    </p>
                </div>
                <div className="col pr-0">
                    <button
                        type="button"
                        class="btn clientlistModal-cancelBtn"
                        onClick={handleCancel}>
                        {lang === 'Dutch' ? 'ANNULEREN' : 'CANCEL'}
                    </button>
                </div>
            </div>
            <div class="form-check pl-0">
                {clientList != '' ? (
                    <div>
                        <table>
                            <tr style={{ textTransform: 'uppercase', fontSize: '12px' }}>
                                <th className={lang === 'Dutch' ? 'tdthClientListModalDutch' : 'tdthClientListModalEng'}>
                                    {lang === 'Dutch' ? 'klantnaam' : 'Client Name'}
                                </th>
                                <th
                                    style={{ textAlign: 'center' }}
                                    className={lang === 'Dutch' ? 'tdthClientListModalDutch' : 'tdthClientListModalEng'}>
                                    {lang === 'Dutch' ? 'Selecteer' : 'Select'}
                                </th>
                            </tr>
                            {clientList != '' ? (
                                clientList.map((item) => (
                                    <tr>
                                        <td className={lang === 'Dutch' ? 'tdthClientListModalDutch' : 'tdthClientListModalEng'}>{item.clientName}</td>
                                        <td className={lang === 'Dutch' ? 'tdthClientListModalDutch' : 'tdthClientListModalEng'}>
                                            <input
                                                style={
                                                    lang === 'Dutch'
                                                        ? { marginLeft: '45px' }
                                                        : { marginLeft: '30px' }
                                                }
                                                type="radio"
                                                name="radioBtn"
                                                class="form-check-input checkboxBtn-clientlistmodal"
                                                id={item.clientName}
                                                value={item._id}
                                                onChange={handleChnage}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                    <div className="ml-3">No Record Found.</div>
                                )}
                        </table>
                    </div>
                ) : (
                        <div className="p-1"> No Record Found.</div>
                    )}
            </div>
            <div className="col pr-0" style={{ marginTop: '25px' }}>
                <a href={'/ChooseScan/' + clientId + '/' + clientName}>
                    <button
                        type="button"
                        class="btn clientlistModal-cancelBtn"
                        disabled={clientListConfirmBtn ? true : false}>
                        {lang === 'Dutch' ? 'BEVESTIGEN' : 'CONFIRM'}
                    </button>
                </a>
            </div>
        </div>
    );
};

ClientListForm.propTypes = {
    dispatch: func.isRequired,
    clientListData: shape({}).isRequired,
};

export default ClientListForm;
