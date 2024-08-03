# Setting service

## install

```
npm install
```

## run project

```
npm run dev
```

```
SERVER : http://121.41.58.117:7000/api/v1/setting
LOCAL : http://localhost:7000/api/v1/setting
PORT : 7000
```

# Category

### Create Category

##### URL : category/create

##### Method : POST

##

###

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `name`    | `string` | **Required**.        |
| `number`  | `number` | **Required** unique. |

### Update Category

##### URL : category/up/:categoryId

##### Method : POST

##

###

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `name`    | `string` | **Optional**.        |
| `number`  | `number` | **Optional** unique. |

### Update SubCategory To Category

##### URL : category/upsub/:categoryId

##### Method : POST

##

###

| Parameter     | Type       | Description                                                                    |
| :------------ | :--------- | :----------------------------------------------------------------------------- |
| `subCategory` | `ObjectId` | **Required**.                                                                  |
| `add`         | `boolean`  | **Required** ? add == true subCategory add to chategory : remove from category |

### remove Category

##### URL : category/rem/:categoryId

##### Method : GET

##

###

### All Category

##### URL : category/all

##### Method : GET

##

###

# SubCategory

### Create SubCategory

##### URL : subcategory/create/:categoryId

##### Method : POST

##

###

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `name`    | `string` | **Required**.        |
| `number`  | `number` | **Required** unique. |

### Update SubCategory

##### URL : subcategory/up/:subcategoryId

##### Method : POST

##

###

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| `name`    | `string` | **Optional**.        |
| `number`  | `number` | **Optional** unique. |

### remove SubCategory

##### URL : category/rem/:subcategoryId

##### Method : GET

##

###

### All SubCategory

##### URL : subcategory/all

##### Method : GET

##

###

# Group

### Create Group

##### URL : group/create

##### Method : POST

##

###

| Parameter     | Type         | Description          |
| :------------ | :----------- | :------------------- |
| `name`        | `string`     | **Required**. unique |
| `number`      | `number`     | **Required**. unique |
| `permissions` | `[objectId]` | **Optional**.        |
| `description` | `string`     | **Optional**.        |
| `iconName`    | `string`     | **Optional**.        |
| `libIconName` | `string`     | **Optional**.        |

### Update Group

##### URL : group/up/:groupId

##### Method : POST

##

###

| Parameter     | Type     | Description          |
| :------------ | :------- | :------------------- |
| `number`      | `number` | **Required**. unique |
| `description` | `string` | **Optional**.        |
| `iconName`    | `string` | **Optional**.        |
| `libIconName` | `string` | **Optional**.        |

### Update permissions To group

##### URL : group/updateperm/:groupId

##### Method : POST

##

###

| Parameter     | Type         | Description                                                             |
| :------------ | :----------- | :---------------------------------------------------------------------- |
| `permissions` | `[objectId]` | **Required**.                                                           |
| `add`         | `boolean`    | **Required** ? add == true permissions add to group : remove from group |

### remove group

##### URL : group/rem/:groupId

##### Method : GET

##

###

### All Group

##### URL : group/all

##### Method : GET

##

###

###

####

####

####

####

# Permission

### Update Permission

##### URL : permission/up/:permissionId

##### Method : POST

##

###

| Parameter     | Type     | Description          |
| :------------ | :------- | :------------------- |
| `name`        | `string` | **Optional**.        |
| `number`      | `number` | **Required**. unique |
| `description` | `string` | **Optional**.        |
| `iconName`    | `string` | **Optional**.        |
| `libIconName` | `string` | **Optional**.        |

### remove PermissionId

##### URL : permissionId/rem/:permissionIdId

##### Method : GET

##

###

### All PermissionId

##### URL : permissionId/all

##### Method : GET

##

###

###

###

###

###

###

# Variable

### Create Variable

##### URL : variable/create

##### Method : POST

##

###

| Parameter | Type      | Description   |
| :-------- | :-------- | :------------ |
| `name`    | `string`  | **Required**. |
| `amount`  | `number`  | **Optional**. |
| `check`   | `boolean` | **Optional**. |

### Update Variable

##### URL : variable/up/:variableId

##### Method : POST

##

###

| Parameter | Type      | Description   |
| :-------- | :-------- | :------------ |
| `name`    | `string`  | **Required**. |
| `amount`  | `number`  | **Optional**. |
| `check`   | `boolean` | **Optional**. |

### remove Variable

##### URL : variable/rem/:variableId

##### Method : GET

##

###

### All Variable

##### URL : variable/all

##### Method : GET
