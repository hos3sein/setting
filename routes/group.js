const express = require("express");

const C = require("../controllers/group");

const { protect } = require("../middleware/auth");

const router = express.Router();

// POST
router.post("/create", C.create);
router.put("/up/:id", C.update);


// GET
router.get("/all", C.all);
router.get("/one/:id", C.one);

// REMOVE
router.delete("/rem/:id", C.remove);

/**
 * @swagger
 * components: 
 *   schemas:
 *     Group:
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
 *             description: number of group
 *          iconName:
 *             type: String
 *             description: icon of group
 *    
 *       example:
 *              name: baseUser
 *              number: 100
 */     

/**
 * @swagger
 * tags:
 *   name: Group        
 *   description: The Group managing API 
 */         

/**
 * @swagger
 * /group/create:
 *   post:
 *     summery: create new Group
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       200:
 *         description: create new Group succefully
 *         content:
 *            application/json:
 *               schema:
 *                 
 *            
 *                     $ref: '#/components/schemas/Group'
 *       500:
 *         description: serverSide error please try again later
 */
/**
 * @swagger
 * /group/all:
 *   get:
 *     summery: get all Group
 *     tags: [Group]
 *     responses:
 *       200:
 *         description: all Group 
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Group'
 *       
 *            
 */
/**
 * @swagger
 * /group/one/{id}:
 *   get:
 *     summery: get one Group
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The Group id
 *     responses:
 *       200:
 *         description: one  Group
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Group'
 *       404:
 *         description: The accountparty was not found
 *            
 */
/**
 * @swagger
 * /group/up/{id}:
 *   put:
 *     summery: Group edit
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The GroupId  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       200:
 *         description: all account 
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Group'
 *       500:
 *         description: serverSide error please try again later
 *       404:
 *         description: Employee not found
 *
 */

/**
 * @swagger
 * /group/rem/{id}:
 *   delete:
 *     summery: delete Group with id
 *     tags: [Group]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema   :
 *           type: string
 *         required: true
 *         description: The Group id
 *     responses:
 *       201:
 *         description: stre remove
 *         content:
 *            application/json:
 *               schema:
 *                 
 *                 
 *                     $ref: '#/components/schemas/Group'
 *       404:
 *         description: The employee was not found
 *            
 */


module.exports = router;
