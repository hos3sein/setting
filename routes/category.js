const express = require("express");

const C = require("../controllers/category");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/create", protect ,C.create);

router.put("/up/:id",protect ,C.update);

// GET
router.get("/all", C.all);

router.get("/one/:id", C.one);

// REMOVE
router.delete("/rem/:id", protect , C.remove);

module.exports = router;

/**
 * @swagger
 * components: 
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name 
 *         - number
 *          
 *         
 *         
 *       properties:
 *          _id:
 *             type: mongoObjectId
 *             description: id 
 *          name:
 *             type: String
 *             description: name
 *          number:
 *             type: Number
 *             description: number of category
 *    
 *       example:
 *              name: sports
 *              number: 1
 */     
/**
 * @swagger
 * tags:
 *   name: Category         
 *   description: The Category managing API 
 */         

/**
 * @swagger
 * /category/create:
 *   post:
 *     summery: create new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: create new Category succefully
 *         content:
 *            application/json:
 *               schema:
 *                 
 *            
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: serverSide error please try again later
 */
/**
 * @swagger
 * /category/all:
 *   get:
 *     summery: get all Category
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: all Category 
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Category'
 *       
 *            
 */
/**
 * @swagger
 * /category/one/{id}:
 *   get:
 *     summery: get one category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: one  category
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Category'
 *       404:
 *         description: The accountparty was not found
 *            
 */
/**
 * @swagger
 * /category/up/{id}:
 *   put:
 *     summery: Category edit
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The CategoryId  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: all account 
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: serverSide error please try again later
 *       404:
 *         description: Employee not found
 *
 */

/**
 * @swagger
 * /category/rem/{id}:
 *   delete:
 *     summery: delete Category with id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The Category id
 *     responses:
 *       201:
 *         description: stre remove
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Category'
 *       404:
 *         description: The employee was not found
 *            
 */

