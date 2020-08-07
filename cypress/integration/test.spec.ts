import domains from '../../out/domains.json';
import { WebDomain } from '../../interfaces/web-domain';

// TODO: load from file
const approvedDomains = [3, 4];

describe('Check home pages', () => {

    (domains as Array<WebDomain>).filter(isApproved).forEach(domain => {
        const domainName = `https://${domain.name}`;
        it(domainName, ()=>  {
            cy.visit(domainName);
            cy.matchImageSnapshot();
        });
    });

});

function isApproved(domain: WebDomain): boolean {
    return approvedDomains.some(approvedId => approvedId === domain.id);
}
