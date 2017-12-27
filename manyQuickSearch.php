<?
// edit 頁面下 新增search function ，function name 對應  auto link
{
    public function productManyQuickSearch( Request $Request )
    {
            $tagOrms = model::orm([
                'where' => [
                    'name like' => $Request->productName
                ],
                'orderBy' => [
                    'id' => 'DESC',
                    'prioritynum' => 'DESC',
                ],
                'start' => 0 ,
                'count' => 20
            ]);
            
            foreach( $tagOrms as $tagOrm )
            {
                $data = [];
                $data['text'] = $tagOrms->name;
                $data['value'] = $tagOrms->id;
                $response[] = $data;
            }
            return $response; 
    }
}
// <!-- edit autoview -->
// productTagId 改資料庫欄位名稱 
// productManyQuickSearch fuction name
$Form->addField([
    'type' => 'manyQuickSearch',
    'ORMAttr' => 'productTagId',
    'inputName' => 'productTagId',
    'styleClass' => 'productTagId',
    'url' => $this->AutoView->link('productManyQuickSearch'),
    'title' => '建議產品'
]);

// <!-- edit頁面  view 新增後續 撈資料頁面顯示-->

// <!--ORM fieldName改table 欄位 -->
// <!-- model::orm 改存此資料的table -->

public function view( Request $Request )
    {

        $Form = $this->AutoView->addForm([
            'action' => 'post',
            'ORMClassName' => model::class,
            'Request' => $Request,
        ]);

        if($Form->ORM->fieldName){
            $output = explode(",", $Form->ORM->fieldName);
            $manyQuickSearchArr[] = '';
            foreach($output as $key => $manyQuickSearch_arr){
                $manyQuickOrm = model::orm([
                    'where' => [
                        'id' => $manyQuickSearch_arr
                    ]
                ]);

                $manyQuickSearchArr[$key] = $manyQuickOrm->name;
            }
        }
        $this->data['manyQuickSearchs'] = $manyQuickSearchArr;
        
        return parent::view($Request);
    }


// <!-- post  存欄位-->
// 更改models::orm
        $ORM = models::orm( $Request->id );
        
                $ManyQuickSerachTags = '';
                // 陣列唯一值 排除 重複輸入 array_unique($Request->tag)
                foreach(array_unique($Request->tag) as $key => $tagname){
                    
                    $SerachTag = models::orm([
                        'where' => [
                            'name' => $tagname
                        ]
                    ]);
                    if($SerachTag->id){
                        if($key == 0){
                            $ManyQuickSerachTags = $SerachTag->id;
                        }else{
                            $ManyQuickSerachTags .= ','.$SerachTag->id;
                        }
                    }
                }
        
        // 對應auto manyquickserach inputname 
        $ORM->productTagId = $ManyQuickSerachTags;
        $ORM->save();

?>