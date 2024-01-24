
/*
const IncaObject = {

    patienter // Array av patient objekt
};


const Patient = {
    personNr, 
    diagnoser, // Array av diagnos objekt
    behandlingar, // Array av behandling objekt
    alltillsånd // Array av tillsånd objekt
};

const diagnos = {
    diagnosgrund,
    datum
};

const tillsånd = {
    datum,
    ecog
};

const behandling = {
    typ,
    datum,
    oprationskoder // Array av oprationskod objekt
};

const oprationskod = {
    kod
};
*/

const DiagnosGrund = {
    PAD: 'PAD',
    CYTOLOGI: 'cytologi',
    RÖNTGEN: 'röntgen',
    KLINISK: 'klinisk'
};

const Behandling = {
    CYTO: 'cytostatikabehandling',
    STRÅL: 'strålbehandling',
    KIRURGI: 'kirurgi'
};


window.inca = createIncaObject();

function createIncaObject(patienterList = []){
    const IncaObject = {
        patienter: patienterList 
    }; 

    return IncaObject;
}

function createPatient(personNr, diagnoser = [], behandlingar = [], alltillsånd = []){
    const Patient = {
        personNr: personNr, 
        diagnoser: diagnoser, 
        behandlingar: behandlingar,
        alltillsånd: alltillsånd 
    };

    return Patient;
}

function createDiagnos(diagnosgrund, datum){
    const diagnos = {
        diagnosgrund: diagnosgrund,
        datum: datum
    };

    return diagnos;
}

function createTillsånd(datum, ecog){
    const tillsånd = {
        datum: datum,
        ecog: ecog
    };

    return tillsånd;
}

function createBehandling(typ, datum, oprationskoder = []){
    
    oprationskoder = typ === Behandling.KIRURGI ? oprationskoder : [];
     
    const behandling = {
        typ: typ,
        datum: datum,
        oprationskoder: oprationskoder
    };

    return behandling;
}


export {Behandling,DiagnosGrund,createPatient, createDiagnos, createTillsånd, createBehandling};