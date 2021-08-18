import request from "supertest";
import { expect } from 'chai';

import { BookingMain } from "entity/BookingMain";




// describe('IsTableOutsideTheAvailableArea', function () {
//     let sut: Table;
//     let layout: LayoutMain;
//     let table: LayoutTable;

//     before(async function () {
//         sut = new Table();
//         //layout
//         layout = new LayoutMain();
//         layout.isDeleted = false;
//         layout.id = 'test';
//         layout.layoutName = 'test';
//         layout.length_y = 20;
//         layout.width_x = 20;

//         //exempt 
//         let exempts = new Array();

//         let exempt = new LayoutMainExempt;
//         exempt.x = 1;
//         exempt.y = 1;
//         exempt.layoutMain = Promise.resolve(layout);
//         exempts.push(exempt);

//         let exempt1 = new LayoutMainExempt;
//         exempt1.x = 1;
//         exempt1.y = 2;
//         exempt1.layoutMain = Promise.resolve(layout);
//         exempts.push(exempt1);

//         let exempt2 = new LayoutMainExempt;
//         exempt2.x = 10;
//         exempt2.y = 10;
//         exempt2.layoutMain = Promise.resolve(layout);
//         exempts.push(exempt2);

//         layout.layoutMainExempt = Promise.resolve(exempts);

//         //table
//         table = new LayoutTable();
//         table.length = 1;
//         table.width = 1;
//         table.seatCount = 2;
//         table.seatCountAfterMerge = 2;

//     });

//     it('returns false if the table is inside the layout area', async function () {
//         let x = 5;
//         let y = 5;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(false);
//     });


//     it('returns true if the table is outside the layout area', async function () {
//         let x = 21;
//         let y = 5;

//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });

//     it('returns true if the table is inside the layout area but size of table exceeds', async function () {
//         let x = 20;
//         let y = 5;
//         table.width = 2;

//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });

//     it('returns true if the table is inside the layout area but hits exempt', async function () {
//         let x = 1;
//         let y = 1;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });

//     it('returns true if the table is inside the layout area but hits exempt in the middle', async function () {
//         let x = 10;
//         let y = 10;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });

//     it('returns true if the table is inside the layout area, but width of the table hits exempt in the middle', async function () {
//         let x = 9;
//         let y = 10;
//         table.width = 2;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });

//     it('returns false if the table is inside the layout area, and location of the table aside of exempt in the middle', async function () {
//         let x = 9;
//         let y = 9;
//         table.width = 2;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(false);
//     });

//     it('returns true if the table exceeds the layout area', async function () {
//         let x = 17;
//         let y = 10;
//         table.width = 5;
//         const result = await sut.IsTableOutsideTheAvailableArea(table, layout, x, y);
//         expect(result).to.equal(true);
//     });
// });
