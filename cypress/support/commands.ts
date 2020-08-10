import { addMatchImageSnapshotCommand } from '../../node_modules/cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.05, // per image difference
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.1 }, // per pixel difference
  capture: 'viewport',
  customSnapshotsDir: "./snapshots",
});

Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 });
 