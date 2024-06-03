<?php   

use craft\elements\Entry;
use craft\helpers\UrlHelper;

    return [
        'endpoints' => [
            'posts' => function() {
                return [
                    'elementType' => Entry::class,
                    'criteria' => ['section' => 'portfolio', 'limit' => 10, 'orderBy' => 'postDate desc'],
                    'elementsPerPage' => 10,
                    'transformer' => function(Entry $entry) {
                        return [
                            'title' => $entry->title,
                            'description' => $entry->description,
                            'slug' => $entry->slug,
                            'date' => $entry->postDate,
                        ];
                    },
                ];
            }
        ],
    ];
 
?>