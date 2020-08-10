import domains from '../../out/domains.json';
import { WebDomain } from '../../interfaces/web-domain';

// TODO: load from file
const approvedDomains = [3, 4];

describe('Check home page', () => {

    (domains as Array<WebDomain>).filter(isApproved).forEach(domain => {
        const domainName = `https://${domain.name}`;
        it(`Initial view of ${domainName}`, ()=>  {
            cy.visit(domainName);
            cy.matchImageSnapshot(domain.name);
        });

        it(`Footer view of ${domainName}`, ()=>  {
            cy.scrollTo('bottom', { ensureScrollable: false });
            cy.window().then(($window) => {
                if ($window.scrollY === 0) {
                    cy.log('Document didn\'t scroll, screenshot compare skipped.');
                } else {
                    cy.matchImageSnapshot(`${domain.name}-footer`);
                }
            });
        });
    });

});

function isApproved(domain: WebDomain): boolean {
    return approvedDomains.some(approvedId => approvedId === domain.id);
}
