
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

function createIncaObject(...patienterList){
    const IncaObject = {
        patienter: patienterList 
    }; 

    return IncaObject;
}

function createPatient(personNr, diagnoser, behandlingar, alltillsånd){
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

function createBehandling(typ, datum, oprationskoder){
    const behandling = {
        typ: typ,
        datum: datum,
        oprationskoder: oprationskoder
    };

    return behandling;
}

function createOprationskod(kod){
    const oprationskod = {
        kod: kod
    };

    return oprationskod;
}

