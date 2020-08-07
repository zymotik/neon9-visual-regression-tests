import domains from '../../out/domains.json';
import { WebDomain } from '../../interfaces/web-domain';

describe('Check home pages', () => {

    filterApproved(domains as Array<WebDomain>).forEach(domain => {
        const domainName = `https://${domain.name}`;
        it(domainName, ()=>  {
            cy.visit(domainName);
            cy.matchImageSnapshot();
        });
    });

});

function filterApproved(webDomains: WebDomain[]): WebDomain[] {
    // TODO: load from file
    const approvedDomains = [3, 4];
    return webDomains.filter(domain => approvedDomains.some(approvedId => approvedId === domain.id));
}
